/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Header_top from './component/header_top/header_top';
import Footer from './component/footer/footer';
import Main_image from './component/main_image/main_image';
import Country_list from './component/country_list/country_list';

function App() {
  return (
    <div>

      <Header_top />
      <Main_image/>
      < Country_list />
      <Footer />


</div>
  );
}

export default App;
