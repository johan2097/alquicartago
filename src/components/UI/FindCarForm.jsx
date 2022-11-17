import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Nombre del  Vehiculo" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Direccion" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="La fecha" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Planea la hora"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Carro AC</option>
            <option value="non-ac">Un carro AC</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Encuentra tu vehiculo</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
