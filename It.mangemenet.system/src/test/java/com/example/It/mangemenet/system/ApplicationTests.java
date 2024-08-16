package com.example.It.mangemenet.system;

import com.example.It.mangemenet.system.model.Panne;
import com.example.It.mangemenet.system.repo.PanneRepository;
import com.example.It.mangemenet.system.service.PanneService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class ApplicationTests {

    @Mock
    private PanneRepository panneRepository;

    @InjectMocks
    private PanneService panneService;

    public ApplicationTests() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreerPanne() {
        Panne panne = new Panne();
        panne.setId(1L);
        panne.setDescription("Test Panne");

        // When
        when(panneRepository.save(panne)).thenReturn(panne);

        // Then
        Panne createdPanne = panneService.creerPanne(panne);
        assertEquals(panne.getId(), createdPanne.getId());
        assertEquals(panne.getDescription(), createdPanne.getDescription());


        verify(panneRepository).save(panne);
    }
}
