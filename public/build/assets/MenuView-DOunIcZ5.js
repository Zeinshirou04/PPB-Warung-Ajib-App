import{a as x,r as i,j as e,b as o}from"./app-Bk0E4HFL.js";import{A as p}from"./AuthenticatedLayout-R9TKktSN.js";import{L as n}from"./LabeledInput-DRJX0pKs.js";const j={mid:"",gambar:null,nama_menu:"",deskripsi:"",harga:0};function M(){const{data:s,setData:l,post:c,progress:r}=x(j),[d,m]=i.useState([]);i.useEffect(()=>{(async()=>{const t=await o.get(route("dashboard.menu.all"));m(t.data.items)})()},[]);const u=d!=[]&&d.map((a,t)=>e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:++t}),e.jsx("td",{children:a.mid}),e.jsx("td",{children:e.jsx("div",{className:"w-24 h-24 mx-auto",children:e.jsx("img",{src:`/${a.gambar}`,alt:""})})}),e.jsx("td",{children:a.nama_menu}),e.jsx("td",{children:a.deskripsi}),e.jsx("td",{children:a.harga})]})),h=a=>{a.preventDefault(),c(route("dashboard.menu.store"))};return e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-8 gap-4 h-full px-8 py-12",children:[e.jsxs("div",{className:"col-span-6 p-4 flex flex-col gap-4",children:[e.jsx("header",{className:"font-bold text-2xl",children:e.jsx("h4",{children:"List Menu"})}),e.jsx("div",{className:"w-full max-h-full overflow-y-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"ID Menu"}),e.jsx("th",{children:"Gambar Menu"}),e.jsx("th",{children:"Nama Menu"}),e.jsx("th",{children:"Deskripsi Menu"}),e.jsx("th",{children:"Harga Menu"})]})}),e.jsx("tbody",{children:u})]})})]}),e.jsxs("div",{className:"col-span-2 p-4 flex flex-col gap-4",children:[e.jsx("header",{className:"font-bold text-2xl",children:e.jsx("h4",{children:"Tambah/Edit Menu"})}),e.jsxs("form",{onSubmit:h,className:"w-full flex flex-col gap-3",children:[e.jsx(n,{type:"text",name:"mid",id:"mid",placeholder:"Masukkan ID Menu",className:"rounded-md ",data:s,setData:l,label:"ID Menu"}),e.jsx(n,{type:"file",name:"gambar",id:"gambar",placeholder:"Masukkan Gambar Menu",data:s,setData:l,label:"Gambar Menu"}),r&&e.jsxs("progress",{value:r.percentage,max:"100",children:[r.percentage,"%"]}),e.jsx(n,{type:"text",name:"nama_menu",id:"nama_menu",placeholder:"Masukkan Nama Menu",className:"rounded-md ",data:s,setData:l,label:"Nama Menu"}),e.jsx(n,{type:"text",name:"deskripsi",id:"deskripsi",placeholder:"Masukkan Deskripsi Menu",className:"rounded-md ",data:s,setData:l,label:"Deskripsi Menu"}),e.jsx(n,{type:"number",name:"harga",id:"harga",placeholder:"Masukkan Harga Menu",className:"rounded-md ",data:s,setData:l,label:"Harga Menu"}),e.jsx("input",{type:"submit",className:"bg-blue-500 py-2 rounded-md text-white hover:bg-blue-600/80 active:bg-blue-600 focus:bg-blue-600/80",value:"Tambah Menu"})]})]})]})})}export{M as default};
