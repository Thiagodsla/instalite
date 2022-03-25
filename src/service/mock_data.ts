type Photo = {
   id: number,
   name: string,
   url: string
}

//const photos: Array<Photo> = [
const photos: Photo[] = [
   {
      id: 1,
      name: 'Bacon do Pedro',
      url: 'https://img.itdg.com.br/tdg/images/blog/uploads/2019/02/Receitas-com-bacon.jpg'
   },
   {
      id: 2,
      name: 'Cosplay de Gazzi',
      url: 'https://www.catarseparaevolucao.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-21-at-20.17.14-4.jpeg'
   },
   {
      id: 3,
      name: 'Cosplay de Leandro',
      url: 'https://aventurasnahistoria.uol.com.br/media/_versions/entretenimento/leonidas_widelg.jpg'
   },
   {
      id: 4,
      name: 'Batata da Lu',
      url: 'https://xtudoreceitas.com/wp-content/uploads/Batata-Frita-estilo-Mac-Donalds.jpg'
   },
   {
      id: 5,
      name: 'Thiago o soldado frustrado',
      url: 'https://www.itaecoturismo.com.br/imagens/atracoes_airsoft_09.jpg'
   },
]


export { photos }