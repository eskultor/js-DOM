const btn =document.querySelector('.btn');
const save= JSON.parse(localStorage.getItem('data')) || []

btn.addEventListener('click',()=>
{
	const url=document.getElementsByName('url')[0].value
	const description=document.getElementsByName('description')[0].value
	console.log(url)
	console.log(description)
	save.push({'url':url, 'description':description});
	localStorage.setItem('data',JSON.stringify(save));
	location.reload();
})

if(localStorage.getItem('data'))
{
	console.log("Si se encontro");
	const data = JSON.parse(localStorage.getItem('data'));
	data.forEach(d =>
	{
		const div = document.createElement('div');
		div.className= "item";

		const image = document.createElement('img');
		image.className= "img";
		image.setAttribute('src', d.url);
		document.querySelector('.item-container').appendChild(div).appendChild(image);


		const description = document.createElement('p');
		description.className= "descrition";
		const des = document.createTextNode(d.description);
		description.appendChild(des);
		document.querySelector('.item-container').appendChild(div).appendChild(description);


		const borrar = document.createElement('p');
		borrar.className= "borrar";
		const x = document.createTextNode("Eliminar");
		borrar.appendChild(x);
		document.querySelector('.item-container').appendChild(div).appendChild(borrar);
	})
}
else
{
	console.log("nose encontro");
}

const del = document.getElementsByClassName('borrar');

for(let i=0; i<del.length; i++)
{
	del[i].addEventListener('click',()=>
	{
		save.splice(i,i+1);
		localStorage.setItem('data',JSON.stringify(save));
		location.reload();
	})
}
