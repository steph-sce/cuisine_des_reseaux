import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateRecipeInfo() {
  const [recipe, setRecipe] = useState({
    title: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/recipes/${id}`)
      .then((res) => {
        setRecipe({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateRecipeInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: recipe.title,
      author: recipe.author,
      description: recipe.description,
      published_date: recipe.published_date,
      publisher: recipe.publisher,
    };

    axios
      .put(`http://localhost:8082/api/recipes/${id}`, data)
      .then(() => {
        navigate(`/show-recipe/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateRecipeInfo!', err);
      });
  };

  return (
    <div className='UpdateRecipeInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Recipe List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Recipe</h1>
            <p className='lead text-center'>Update Recipe's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Recipe'
                name='title'
                className='form-control'
                value={recipe.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={recipe.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Recipe'
                name='description'
                className='form-control'
                value={recipe.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='published_date'>Published Date</label>
              <input
                type='text'
                placeholder='Published Date'
                name='published_date'
                className='form-control'
                value={recipe.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publisher'>Publisher</label>
              <input
                type='text'
                placeholder='Publisher of the Recipe'
                name='publisher'
                className='form-control'
                value={recipe.publisher}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipeInfo;