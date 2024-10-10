import cera from '../../assets/serv/cera.jpeg'
import hidraglos from '../../assets/serv/hidraglos.jpeg'
import drenagem from '../../assets/serv/drenagem.jpeg'
import limp_pele from '../../assets/serv/limp_pele.jpeg'
import remo_sinais from '../../assets/serv/remo_sinais.jpeg'
import spa_pes from '../../assets/serv/spa_pes.jpeg'
import massagem from '../../assets/serv/massagem.jpeg'
import micro_agulha from '../../assets/serv/micro_agulha.jpeg'

export default function Catalogo() {
    let links = [
        {img: cera},
        {img: hidraglos},
        {img: drenagem},
        {img: limp_pele},
        {img: remo_sinais},
        {img: spa_pes},
        {img: massagem},
        {img: micro_agulha}
    ]

    return (
        <section className='grid grid-cols-3 justify-center static p-2 pl-2 mt-8'>
            {
                links.map((link)=>(
                    <div className='shadow-xl pt-2'>
                        <img src={link.img} alt="" className='h-[525px] w-[275px]' />
                    </div>
                ))
            }
        </section>
  )
}
