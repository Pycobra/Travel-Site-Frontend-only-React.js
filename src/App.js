import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage.component.jsx';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import './App.css'


class App extends React.Component {
  render(){
    return (
      <main className='app'>
      <Router>
          <Header/>
        
          <section id='container'>
            <Routes>
                <Route path='/*' element={<LandingPage/>} /> 
            </Routes>
            <Footer />
          </section>
      </Router>
      </main>
    );
  };
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   // collection_data_toFirebase: selectShopCollectionArrayToFirebase,
//   // product_type_data_toFirebase: selectShopProductTypeArrayToFirebase,
//   // category_data_toFirebase: selectShopCategoryArrayToFirebase,
// })
// const mapDispatchToProps = dispatch => ({
//      setCurrentUser: user => dispatch(setCurrentUser(user)),
//      checkUserSession: () => dispatch(checkUserSession()),
//      fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
//      fetchCategoryStart: () => dispatch(fetchCategoryStart()),
//      fetchProductTypesStart: () => dispatch(fetchProductTypesStart()),
//      fetchFirebaseNetworkStatusStart: () => dispatch(fetchFirebaseNetworkStatusStart()),
// })
export default App;