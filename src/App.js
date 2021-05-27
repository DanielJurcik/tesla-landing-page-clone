import './App.css';
import Header from './components/Header/Header';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item/Item';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="app__itemsContainer">
                <Item
                    title='Model S'
                    desc='Order Online for Touchless Delivery'
                    descLink=''
                    backgroundImg={ModelS}
                    leftBtnText='CUSTOM ORDER'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                />
                <Item
                    title='Model 3'
                    desc='Order Online for Touchless Delivery'
                    descLink=''
                    backgroundImg={Model3}
                    leftBtnText='CUSTOM ORDER'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                />
                <Item
                    title='Model X'
                    desc='Order Online for Touchless Delivery'
                    descLink=''
                    backgroundImg={ModelX}
                    leftBtnText='CUSTOM ORDER'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                />
                <Item
                    title='Model S'
                    desc='Order Online for Touchless Delivery'
                    descLink=''
                    backgroundImg={ModelY}
                    leftBtnText='CUSTOM ORDER'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                />
                <Item
                    title='Lowest Cost Solar Panels in America'
                    desc='Money-back guarantee'
                    descLink=''
                    backgroundImg={SolarPanels}
                    leftBtnText='ORDER NOW'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                    first
                />
                <Item
                    title='Solar for New Roofs'
                    desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                    descLink=''
                    backgroundImg={SolarRoof}
                    leftBtnText='ORDER NOW'
                    leftBtnLink=''
                    rightBtnText='LEARN MORE'
                    rightBtnLink=''
                    twoButtons='true'
                />
                <Item
                    title='Model 3'
                    desc='Money-back guarantee'
                    descLink=''
                    backgroundImg={Accessories}
                    leftBtnText='SHOP NOW'
                    leftBtnLink=''
                />
            </div>
        </div>
    );
}

export default App;
