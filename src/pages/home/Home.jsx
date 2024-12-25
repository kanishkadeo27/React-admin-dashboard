import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from './../../dummyData';

const Home = () => {
  return (
    <div className='home'>
        
        <FeaturedInfo/>
        <Chart data={userData} title='User Analytics' grid dataKey="ActiveUser"/>
    </div>
  )
}

export default Home