package com.example.It.mangemenet.system.security1;

import com.example.It.mangemenet.system.service.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfig(CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(expressionInterceptUrlRegistry ->
                        expressionInterceptUrlRegistry
                                .requestMatchers("/auth").permitAll()
                                .requestMatchers("/api/equipements/**").hasRole("ADMIN")
                                // Ticket management
                                .requestMatchers(GET, "/api/tickets/**").hasAnyRole("ADMIN", "TECHNICIAN", "USER")
                                .requestMatchers(POST, "/api/tickets").hasRole("USER")
                                .requestMatchers(PUT, "/api/tickets/**").hasAnyRole("ADMIN", "TECHNICIAN")
                                .requestMatchers(DELETE, "/api/tickets/**").hasRole("ADMIN")

                                .requestMatchers("/api/utilisateurs/**").hasRole("ADMIN")
                                .requestMatchers("/api/notifications/**").hasRole("ADMIN")
                                .requestMatchers("/api/pannes/**").hasRole("ADMIN")
                                .anyRequest().authenticated()
                )
                .formLogin(formLogin -> formLogin.disable());

        http.addFilterBefore(new JwtAuthorizationFilter(customUserDetailsService), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
        return authenticationManagerBuilder.build();
    }
}

