package com.example.It.mangemenet.system.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@DiscriminatorValue("TECHNICIAN")
public class TechnicienIT extends Personne {



}