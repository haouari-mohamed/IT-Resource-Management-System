
export enum EtatEquipement {
  OPERATIONNEL = 'OPERATIONNEL',
  EN_PANNE = 'EN_PANNE',
  HORS_SERVICE = 'HORS_SERVICE',
  FONCTIONNEL = "FONCTIONNEL"
}

export enum EtatTicket {
  OUVERTE = 'OUVERTE',
  EN_COURS = 'EN_COURS',
  RESOLUE = 'RESOLUE'
}

export enum Role {
  ADMIN = 'ADMIN',
  TECHNICIAN = 'TECHNICIAN',
  USER = 'USER'
}

export enum TypeRapport {
  EQUIPEMENTS = 'EQUIPEMENTS',
  PANNES = 'PANNES',
  SUPPORT = 'SUPPORT'
}


export interface Equipement {
  id: number;
  nom: string;
  description: string;
  etat: EtatEquipement;
  dateAcquisition: Date;
}



export interface Notification {
  id: number;
  message: string;
  dateEnvoi: Date;
  lu: boolean;
  administrateur: AdministrateurIT;
}


export interface Panne {
  id: number;
  description: string;
  datePanne: Date;
  resolu: boolean;
  equipement: Equipement;
}


export interface Personne {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
}



export interface Utilisateur extends Personne {}


export interface AdministrateurIT extends Personne {}



export interface TechnicienIT extends Personne {}



export interface TicketDeSupport {
  id: number;
  description: string;
  etat: EtatTicket;
  dateCreation: Date;
  dateResolution?: Date;
  utilisateur: Utilisateur;
  technicien?: TechnicienIT;
  panne?: Panne;
  administrateurIT?: AdministrateurIT;
}


export interface Rapport {
  id: number;
  type: TypeRapport;
  dateGeneration: Date;
  contenu: string;
}
