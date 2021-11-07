import Trybe from './images/Trybe.jpg';
import WiseUp from './images/WiseUp.jpeg';

const data = {
  EN: [
    {img: 'url', name: 'Project 1', description: 'tal'},
    {img: 'url', name: 'Project 2', description: 'tal'},
    {img: 'url', name: 'Project 3', description: 'tal'},
    {img: 'url', name: 'Project 4', description: 'tal'},
    {img: 'url', name: 'Project 5', description: 'tal'}
  ],
  PT: [
    {img: 'url', name: 'Projeto 1', description: 'tal'},
    {img: 'url', name: 'Projeto 2', description: 'tal'},
    {img: 'url', name: 'Projeto 3', description: 'tal'},
    {img: 'url', name: 'Projeto 4', description: 'tal'},
    {img: 'url', name: 'Projeto 5', description: 'tal'}
  ]
}

export const certifications = {
  EN: [
    {img: Trybe, name: 'Front-End Development', issuance: 'Issuance: 10/2021', expiration: 'Expiration: No expiration', link: 'https://v2.credential.net/64fb8441-1b9a-4c44-85dc-51b3639d14ed#gs.f49lp4'},
    {img: WiseUp, name: 'Wise Up English Course', issuance: 'Issuance: 10/2021', expiration: 'Expiration: No expiration', link: 'https://bit.ly/3lYVYJp'},
    {img: Trybe, name: 'Web Development Fundamentals', issuance: 'Issuance: 07/2021', expiration: 'Expiration: No expiration', link: 'https://v2.credential.net/0a53b87f-7162-4084-9884-4a641c171862#gs.e5xeh5'},
  ],
  PT: [
    {img: Trybe, name: 'Desenvolvimento Front-End', issuance: 'Emissão: 10/2021', expiration: 'Expiração: Sem expiração', link: 'https://v2.credential.net/64fb8441-1b9a-4c44-85dc-51b3639d14ed#gs.f49lp4'},
    {img: WiseUp, name: 'Curso de Inglês Wise Up', issuance: 'Emissão: 10/2021', expiration: 'Expiração: Sem expiração', link: 'https://bit.ly/3lYVYJp'},
    {img: Trybe, name: 'Fundamentos do Desenvolvimento Web', issuance: 'Emissão: 07/2021', expiration: 'Expiração: Sem expiração', link: 'https://v2.credential.net/0a53b87f-7162-4084-9884-4a641c171862#gs.e5xeh5'},
  ]
}

export default data;
