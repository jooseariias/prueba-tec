import Header from '@/Components/Header/Header'
import About from '@/Components/About/About';
import Interest from '@/Components/Interest/Interest';
import ContactForm from '@/Components/ContacForm/ContactForm';

import data from '@/hooks/InterestsData';


export default function Home() {
  return (
    <div>
      <Header name="Jose Arias" profileImage="https://media.licdn.com/dms/image/D4D35AQHm1l1PPeH-hQ/profile-framedphoto-shrink_200_200/0/1719447109439?e=1720645200&v=beta&t=Gk2SkFw2c55Ax2u0vDSe5T_tK4QiccDasdKJ34tlcOs" />
       <About description="Mi nombre es José Luis Arias y soy estudiante del curso de Formación de Profesores de Inglés en Tucumán, Argentina. Siempre me ha apasionado la tecnología, lo que me llevó a sumergirme en el mundo de la programación. Para lograr mi objetivo, estudié en la Academy y Argentina Program, donde aprendí a trabajar con lenguajes como JavaScript, Ruby y TypeScript, además de herramientas como React, Redux, HTML y NodeJS." />
      <Interest interests={data} />
      <ContactForm /> 
    </div>
  );
}
