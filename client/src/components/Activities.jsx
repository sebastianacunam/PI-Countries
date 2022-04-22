import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivity, getActivities, getCountries } from "../actions/index";

/*Este componente se encarga de filtrar los países por actividad turística.*/
export default function FiltroActivity({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  const allActivities  = useSelector((state) => state.allActivities);

  let arr = [];
  for (let i = 0; i < allActivities.length; i++) {
    let aux = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name.includes(allActivities[i].name.toLowerCase())) {
        aux = true;
      }
    }
    if (aux === false) {
      arr.push({
        name: allActivities[i].name.toLowerCase(),
        id: allActivities[i].id,
      });
    }
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado: ${e.target.value}`);
  }

  return (
    <div>
      <h6>ACTIVIDAD TURISTICA</h6>
      <div>
        <select 
            key="Actividad" 
            onChange={(e) => handleFilterActivity(e)}
        >
          <option key="Todos" value="Todos">
            Todos
          </option>
          {arr?.map((activity) => (

            <option key={activity.id} value={activity.name}>
              {console.log(activity.name)}
              {activity.name ? activity.name : arr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
