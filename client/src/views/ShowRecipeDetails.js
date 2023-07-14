import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ShowRecipeDetails() {
  const [recipe, setRecipe] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowRecipeDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/recipes/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowRecipeDetails_deleteClick");
      });
  };

  const RecipeItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{recipe.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{recipe.author}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{recipe.publisher}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{recipe.created_date}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{recipe.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowRecipeDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Recipe List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Recipe's Record</h1>
            <p className="lead text-center">View Recipe's Info</p>
            <hr /> <br />
          </div>
          <div className="col-md-10 m-auto">{RecipeItem}</div>
          <div className="col-md-6 m-auto">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => {
                onDeleteClick(recipe._id);
              }}
            >
              Delete Recipe
            </button>
          </div>
          <div className="col-md-6 m-auto">
            <Link
              to={`/edit-recipe/${recipe._id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipeDetails;
