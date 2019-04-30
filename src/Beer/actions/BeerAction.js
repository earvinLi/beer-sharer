// External Dependencies

// Internal Dependencies
import {
  BEER_DELETE,
  BEER_SAVE,
  BEER_FETCH_REQUEST,
  BEER_FETCH_SUCCESS,
} from '../../App/ActionTypes';

export const deleteBeer = ({ id }) => (dispatch) => {
  // TODO: Change to use deleteBeer from graphQlUtils
  console.log(id);

  dispatch({ type: BEER_DELETE });
};

export const saveBeer = ({
  brewery,
  id,
  name,
  style,
}) => (dispatch) => {
  // TODO: Change to use saveBeer from graphQlUtils
  console.log(brewery, id, name, style);

  dispatch({ type: BEER_SAVE });
};

export const fetchBeer = () => (dispatch) => {
  dispatch({ type: BEER_FETCH_REQUEST });

  // TODO: Change to use fetchBeer from graphQlUtils

  dispatch({ type: BEER_FETCH_SUCCESS });
};
