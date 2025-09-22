export interface CreateAutomotorDto {
  cuitDuenio: string;
  dominio: string;
  numeroChasis?: string;
  numeroMotor?: string;
  color?: string;
  fechaFabricacion: string;
};

export interface UpdateAutomotorDto{
  numeroChasis?: string;
  numeroMotor?: string;
  color?: string;
  fechaFabricacion?: string;
  cuitDuenio?: string;
};

export interface CreateSujetoDto {
  spo_cuit: string;
  spo_denominacion: string;
}

export interface AutomotorDto{
  id: number;
  dominio: string;
  numeroChasis?: string;
  numeroMotor?: string;
  color?: string;
  fechaFabricacion: number;
  fechaAltoRegistro: Date;
  objetoDeValor: ObjetoDeValorDto;
  sujeto?: SujetoDto | null;
  vinculos?: VinculoSujetoObjetoDto[];
};

export interface SujetoDto {
  id: number;
  cuit: string;
  denominacion: string;
};

export interface ObjetoDeValorDto{
  id: number;
  tipo: string;
  codigo: string;
  descripcion?: string;
};

export interface VinculoSujetoObjetoDto {
    tipoVinculo: string;
    porcentaje: number;
    responsable: string;
    fechaInicio: Date;
    fechaFin?: Date;
};
