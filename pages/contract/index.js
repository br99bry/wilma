import { useState } from "react";

const Contract = () => {

  const [form, setForm] = useState({
    nombre: '',
    domicilio: '',
    rfc: '',
    indemnizacion: '',
    ciudad_interes: '',
    valor_activos: '',
  })

  const handleChangeValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const local = useRef()
  const localType = () => {
    console.log('local', local);
  }

  const handleSubmit = () => {
  console.log('voy a enviar el siguiente registro al backend')
  const id = localStorage.getItem('idUser')
  fetch(`http://localhost:3006/api/records/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data: form}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  localStorage.removeItem('idUser')
  }
  return (
    <div className="py-4 md:py-8">
      <section className="max-w-md px-4 mx-auto md:px-8 md:bg-white md:shadow-md md:border md:rounded-2xl font-v2_body">
        <form
          action="#"
          data-test-id="start"
          id="start_form"
          method="post"
          phx-change="validate"
          phx-submit="save"
          phx-target="1"
        >
          <input
            name="_csrf_token"
            type="hidden"
            value="Wx06NyYnAygCPlYAID8bKComIS01FBoLmhVpyR0YoseQaLpksNBzeZJJ"
          />
          <div className="w-11/12 max-w-lg py-8 mx-auto">
            <div className="mb-4">
              <h2 className="mb-2 text-xl md:text-3xl font-semibold">
                Contratacíon
              </h2>
              <p className="text-base leading-relaxed md:text-lg">
                Ingresa los siguientes datos
              </p>
            </div>
            <fieldset className="space-y-6">
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="full_name_text_input"
                >
                  Nombre completo y/o razón social
                </label>
                <div
                  id="full_name_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <input
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="full_name_text_input"
                    name="nombre"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    placeholder=""
                    required=""
                    type="text"
                    onChange={(event) => (handleChangeValue(event))}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="dom_fiscal_text_input"
                >
                  Domicilio fiscal
                </label>
                <div
                  id="dom_fiscal_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <input
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="dom_fiscal_text_input"
                    name="domicilio"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    placeholder=""
                    required=""
                    type="text"
                    onChange={(event) => (handleChangeValue(event))}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="email_text_input"
                >
                  Correo Electrónico
                </label>
                <div
                  id="email_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <input
                    autocomplete="email"
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="email_text_input"
                    inputmode="email"
                    name="email"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    placeholder="Ej. juan@gmail.com"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="rfc_text_input"
                >
                  RFC
                </label>
                <div
                  id="rfc_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <input
                    autocomplete=""
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="rfc_text_input"
                    inputmode="email"
                    name="rfc"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    required=""
                    type="text"
                    onChange={(event) => (handleChangeValue(event))}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="membresia_text_input"
                >
                  Limite de Indemnización de tu membresía
                </label>
                <div
                  id="membresia_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="number_of_stories_select_input"
                      name="indemnizacion"
                      phx-debounce="250"
                      required=""
                      onChange={(event) => (handleChangeValue(event))}
                    >
                      <option value="" selected="">
                        Seleccionar Limite
                      </option>
                      <option value="1">
                        $250,000
                      </option>
                      <option value="2">
                        $500,000
                      </option>
                      <option value="3">
                        $650,000
                      </option>
                    </select>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="city_of_stories_select_input"
                >
                  Ciudad donde tienes un interés económico
                </label>
                <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                  <div className=" relative flex items-center justify-between w-full">
                    <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="city_of_stories_select_input"
                      name="ciudad_interes"
                      phx-debounce="250"
                      required=""
                      onChange={(event) => (handleChangeValue(event))}
                    >
                      <option value="" selected="">
                        Seleccionar Ciudad
                      </option>
                      <option value="1">Riviera Nayarit</option>
                      <option value="2">Los Cabos</option>
                      <option value="3">Cozumel</option>
                      <option value="4">Cancún</option>
                      <option value="5">Playa del Carmen</option>
                      <option value="6">Tulum</option>
                    </select>
                    <i
                      className="absolute right-0 px-4 text-xs pointer-events-none fas fa-caret-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="valor_estimado_select_input"
                >
                  Valor Estimado de los Activos de la Compañia
                </label>
                <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                  <div className=" relative flex items-center justify-between w-full">
                    <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="valor_estimado_select_input"
                      name="valor_activos"
                      phx-debounce="250"
                      required=""
                      onChange={(event) => (handleChangeValue(event))}
                    >
                      <option value="" selected="">
                        Seleccionar Valor
                      </option>
                      <option value="1">De 0 a $500,000</option>
                      <option value="2">De $500,000 a $1,500,000</option>
                      <option value="3">De $1,500,000 a $2,500,000</option>
                      <option value="4">Más de $2,500,000</option>
                    </select>
                    <i
                      className="absolute right-0 px-4 text-xs pointer-events-none fas fa-caret-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full radio-box" id="gender_radio_input_parent">
                <legend className="block text-lg leading-relaxed font-semibold ">
                  ¿El local donde operas es Propio o Arrendado?
                </legend>
                <div className="flex items-center justify-between -mx-1 w-full">
                  <input
                    id="life_policy_application_data_gender"
                    name="local"
                    type="hidden"
                    value=""
                  />
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_propio"
                      name="tipo_local"
                      required=""
                      type="radio"
                      value="propio"
                      onClick={() => (localType())}
                    />
                    <span className="inline-block w-full text-lg">Propio</span>
                  </label>
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_arrendado"
                      name="tipo_local"
                      required=""
                      type="radio"
                      value="arrendado"
                      onClick={() => (localType())}
                    />
                    <span className="inline-block w-full text-lg">
                      Arrendado
                    </span>
                  </label>
                </div>
                <span
                  className="invalid-feedback text-red-600 text-xs h-4 phx-no-feedback"
                  phx-feedback-for="life_policy_application[data][gender]"
                >
                  *Campo requerido
                </span>
              </div>
              <div className="w-full local ocultar" ref={local}>
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="valor_inmueble_select_input"
                >
                  Valor de bien inmueble propio
                </label>
                <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                  <div className=" relative flex items-center justify-between w-full">
                    <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="valor_inmueble_select_input"
                      name="valor_inmueble"
                      phx-debounce="250"
                      required=""
                    >
                      <option value="" selected="">
                        Seleccionar Valor
                      </option>
                      <option value="1">De $500,000 a $1,500,000</option>
                      <option value="2">De $1,500,000 a $3,000,000</option>
                      <option value="3">De $3,000,000 a $6,000,000</option>
                      <option value="4">Más de $6,000,000</option>
                    </select>
                    <i
                      className="absolute right-0 px-4 text-xs pointer-events-none fas fa-caret-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full radio-box" id="gastos_radio_input_parent">
                <legend className="block text-lg leading-relaxed font-semibold ">
                  ¿Te gustaría cubrir tus gastos fijos o tus utilidades después
                  de impuestos?
                </legend>
                <div className="flex items-center justify-between -mx-1 w-full">
                  <input
                    id="life_policy_application_data_gender"
                    name="gastos_utilidades"
                    type="hidden"
                    value=""
                  />
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                  <input
                    className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                    id="gender_radio_input_gastos"
                    name="life_policy_application[data][gastos]"
                    required=""
                    type="radio"
                    value="gastos"
                  />
                  <span className="inline-block w-full text-lg">
                    Gastos Fijos
                  </span>
                  </ label>
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_utilidades"
                      name="life_policy_application[data][gastos]"
                      required=""
                      type="radio"
                      value="utilidades"
                    />
                    <span className="inline-block w-full text-lg">
                      Utilidades antes de impuestos
                    </span>
                  </label>
                </div>
                <span
                  className="invalid-feedback text-red-600 text-xs h-4 phx-no-feedback"
                  phx-feedback-for="life_policy_application[data][gender]"
                >
                  *Campo requerido
                </span>
              </div>
              <div className="w-full cobertura">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="cobertura_select_input"
                >
                  Valores de tus
                  <span id="gastos">Gastos Fijos</span>
                  <span id="utilidaes">Utilidades antes de impuestos</span>
                </label>
                <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                  <div className=" relative flex items-center justify-between w-full">
                    <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="cobertura_select_input"
                      name="valors_gastos_utilidades"
                      phx-debounce="250"
                      required=""
                    >
                      <option value="" selected="">
                        Seleccionar Valor
                      </option>
                      <option value="1">De 0 a $500,000</option>
                      <option value="2">De $500,000 a $1,500,000</option>
                      <option value="3">De $1,500,001 a $2,500,000</option>
                      <option value="4">Más de $2,500,000</option>
                    </select>
                    <i
                      className="absolute right-0 px-4 text-xs pointer-events-none fas fa-caret-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full radio-box" id="ingresos_input_parent">
                <legend className="block text-lg leading-relaxed font-semibold ">
                  ¿Tus ingresos por facturación anual son superiores a
                  $235,000,000?
                </legend>
                <div className="flex items-center justify-between -mx-1 w-full">
                  <input
                    id="life_policy_application_data_gender"
                    name="ingresos_facturacion"
                    type="hidden"
                    value=""
                  />
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_gastos_yes"
                      name="life_policy_application[data][ingresos]"
                      required=""
                      type="radio"
                      value="si"
                    />
                    <span className="inline-block w-full text-lg">Si</span>
                  </label>
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_utilidades_no"
                      name="life_policy_application[data][ingresos]"
                      required=""
                      type="radio"
                      value="no"
                    />
                    <span className="inline-block w-full text-lg">No</span>
                  </label>
                </div>
                <span
                  className="invalid-feedback text-red-600 text-xs h-4 phx-no-feedback"
                  phx-feedback-for="life_policy_application[data][gender]"
                >
                  *Campo requerido
                </span>
              </div>
              <div className="w-full radio-box" id="empleados_input_parent">
                <legend className="block text-lg leading-relaxed font-semibold ">
                  ¿Cuentas con más de 100 empleados?
                </legend>
                <div className="flex items-center justify-between -mx-1 w-full">
                  <input
                    id="life_policy_application_data_gender"
                    name="empleados"
                    type="hidden"
                    value=""
                  />
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_empleados_yes"
                      name="life_policy_application[data][empleados]"
                      required=""
                      type="radio"
                      value="si"
                    />
                    <span className="inline-block w-full text-lg">Si</span>
                  </label>
                  <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                    <input
                      className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                      id="gender_radio_input_empleados_no"
                      name="life_policy_application[data][empleados]"
                      required=""
                      type="radio"
                      value="no"
                    />
                    <span className="inline-block w-full text-lg">No</span>
                  </label>
                </div>
                <span
                  className="invalid-feedback text-red-600 text-xs h-4 phx-no-feedback"
                  phx-feedback-for="life_policy_application[data][gender]"
                >
                  *Campo requerido
                </span>
              </div>
              <div className="flex flex-col cursor-pointer checkbox-field">
                <legend className="block text-lg leading-relaxed font-semibold ">
                  Confirmas que tienes un interés económico dentro de los
                  limites del área de <span className="zona"></span>
                </legend>
                <div className="flex items-center">
                  <input
                    name="interes economico"
                    type="hidden"
                    value="false"
                  />
                  <input
                    className="form-checkbox border-2 border-v3-super-gray-400 text-v2-super-pink-500 rounded-md bg-white w-5 h-5 mr-2 checked:bg-v2-super-pink-500 hover:border-v2-super-pink-500 focus:ring-v2-super-pink-500 focus:ring-v2-super-pink-500 m-0"
                    id="term_conditions_checkbox_input"
                    name="home_policy_application[data][term_conditions]"
                    required=""
                    type="checkbox"
                    value="true"
                  />
                  <label
                    for="term_conditions_checkbox_input"
                    className="inline-block px-1 text-lg cursor-pointer"
                  >
                    Si cofirmo bajo protesta de decir la verdad.
                  </label>
                </div>
                <span
                  className="help-block text-red-600 text-sm h-4 text-red-600 text-xs h-4"
                  phx-feedback-for="home_policy_application_data_term_conditions"
                >
                  Valor debe ser aceptado
                </span>
              </div>
            </fieldset>
            <div className="flex justify-center pt-20">
              <button
                className="h-18 bg-v2-super-pink-500 px-16 py-4 rounded-full text-white w-full flex justify-center items-center bg-pink-500 text-2xl font-medium hover:bg-pink-800 w-full md:w-auto"
                phx-disable-with="..."
                type="button"
                onClick={() => (handleSubmit())}
              >
                Continuar{" "}
                <i className="px-2 far fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contract;
