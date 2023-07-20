import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getRecipeById, updateRecipeById } from "api/recipes";

const UpdateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const getRecipe = await getRecipeById(id);
      setRecipe(getRecipe);
    })();
  }, [id]);

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateRecipeById(id, recipe);
    navigate("/");
  };

  return (
    <div className="UpdateRecipeInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Recipe List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Recipe</h1>
            <p className="lead text-center">Update Recipe's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Recipe"
                name="title"
                className="form-control"
                value={recipe.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={recipe.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Recipe"
                name="description"
                className="form-control"
                value={recipe.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="text"
                placeholder="Published Date"
                name="published_date"
                className="form-control"
                value={recipe.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of the Recipe"
                name="publisher"
                className="form-control"
                value={recipe.publisher}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipe;
