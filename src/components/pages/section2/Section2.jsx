import scss from './Section2.module.scss';
import logo from '../../../assets/logo/Frame 25.png';

const Section2 = () => {
  return (
    <section className={scss.section2}>
      <div className='container'>
        <div className={scss.content}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  )
}

export default Section2