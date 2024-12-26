import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from './../../dummyData';
import WidgetSmall from '../../Components/widgetsSmall/WidgetSmall';
import WidgetLarge from '../../Components/widgetsLarge/WidgetLarge';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title='User Analytics' grid dataKey="ActiveUser" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home