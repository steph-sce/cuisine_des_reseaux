import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRecipe from './views/CreateRecipe';
import ShowRecipeList from './views/ShowRecipeList';
import ShowRecipeDetails from './views/ShowRecipeDetails';
import UpdateRecipe from './views/UpdateRecipe';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<ShowRecipeList />} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
        <Route path='/edit-recipe/:id' element={<UpdateRecipe />} />
        <Route path='/show-recipe/:id' element={<ShowRecipeDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;