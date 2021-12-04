import { Box } from '@mui/system';
import Header from './components/Header'
import Home from './components/home/Home';
import { Routes,Route } from 'react-router';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';


function App() {
  return (
    // since we dont want to routes navbar 
    <>

    <Header/>
    <Box style={{marginTop:64}}>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
<Route exact path='/details/:id' element={<DetailView/>}/>
<Route exact path='/create' element={<CreateView/>}/>
<Route exact path='/update/:id' element={<UpdateView/>}/>
    </Routes>
    </Box>
    </>
  );
}

export default App;
