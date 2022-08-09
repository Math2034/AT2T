export interface IObjetivo{
  nome: string;
  imagem: string;
  pagina?: string; //? indica que o campo é opcional
  descricao: string;
  codigo: string;
  favorito: boolean;
}
