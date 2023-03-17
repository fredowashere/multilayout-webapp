export const SEGRETERIA = "Modulo Attivita - Segreteria";
export const RESPONSABILE_COMMERICALE = "Modulo Attivita - Responsabile Commerciale";
export const PROJECT_MANAGER = "Modulo Attivita - Project Manager";
export const HR_MANAGER = "Modulo Attivita - HR Manager";
export const CONTROLLER = "Modulo Attivita - Controller";
export const BUSINESS_MANAGER = "Modulo Attivita - Business Manager";
export const AUTOASSEGNAZIONE = "Modulo Attivita - Autoassegnazione";
export const AMMINISTRATORE = "Modulo Attivita - Amministratore ";
export const UTENTE_BASE = "Modulo Attivita - Utente Base";

export const ROLES = [
    SEGRETERIA,
    RESPONSABILE_COMMERICALE,
    PROJECT_MANAGER,
    HR_MANAGER,
    CONTROLLER,
    BUSINESS_MANAGER,
    AUTOASSEGNAZIONE,
    AMMINISTRATORE,
    UTENTE_BASE
];

export interface User {
    idUtente?: number;
    idAzienda?: number;
    nome?: string;
    cognome?: string;
    roles: string[];
}