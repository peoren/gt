import mutations from './detail/mutations';


const state = {
  num:[1,2,3],
  shopGuess:[{
    url:'https://www.cledepeau-beaute.com.cn/public/images/c7/b9/bc/80d1ac6bd8334643b3310ead4de91551480d0faf.png?1468487808#w',
    slogan:'Eyebrow Pencil (Cartridge)',
    title:'眉眼笔芯'
  },
  {
    url:'https://www.cledepeau-beaute.com.cn/public/images/bb/03/a2/934177fdeda969bad2f46c629860f51e9ac411dc.png?1468488647#w',
    slogan:'Eyebrow Pencil (Cartridge)',
    title:'眉眼笔芯'
  },
  {
    url:'https://www.cledepeau-beaute.com.cn/public/images/e6/89/26/cea705b022059949e58ec4099114a5280f24c435.png?1542248740#w',
    slogan:'Eyebrow Pencil (Cartridge)',
    title:'眉眼笔芯'
  },
  {
    url:'https://www.cledepeau-beaute.com.cn/public/images/cc/d3/a4/3f6dff35a6d28791ed33d2fc2e117c709bb13593.jpg?1499141986#w',
    slogan:'Eyebrow Pencil (Cartridge)',
    title:'眉眼笔芯'
  }
  ],
  logined: '',
  showLoading:false,
  prevUrl:'/'
}

 



export default {
  namespaced: true,
  state,
  mutations
}