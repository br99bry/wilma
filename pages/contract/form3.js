import { useState, useRef } from "react";
import { useRouter } from 'next/router';

const ContractForm3 = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    ingresos_facturacion: '',
    empleados: ""
  })

  const handleChangeButtonIngresos = (event) =>{
    setForm({
      ...form, 
      ingresos_facturacion: event.target.value
    })
  }
  const handleChangeEmpleados = (event) =>{
    setForm({
      ...form,
      empleados: event.target.value
    })
  }

  const empleados = useRef();
  const ingresosType = (value) => {
    if(value.target._wrapperState.initialValue == "si"){
      empleados.current.classList.remove('ocultar');
    }else if(value.target._wrapperState.initialValue == "no"){
      empleados.current.classList.add('ocultar');
    }
  }

  const ingresos_si = useRef()
  const ingresos_no = useRef()
  const empleados_si = useRef()
  const empleados_no = useRef()
  const confirm = useRef()
  const inputValidacion = useRef()
  const validacion = () =>{
    console.log('ingresos si', ingresos_si.current.checked)
    console.log('ingresos no', ingresos_no.current.checked)
    console.log('empleados si', empleados_si.current.checked)
    console.log('empleados no', empleados_no.current.checked)
    console.log('confirm', confirm.current.checked)
    if(ingresos_si.current.checked == false && ingresos_no.current.checked == false || empleados_no.current.checked == false && empleados_si.current.checked == false || confirm.current.checked == false || inputValidacion.current.checked == false){
      inputValidacion.current.classList.remove('ocultar');
    }else{
      console.log("texto")
      inputValidacion.current.classList.add('ocultar');
      const id = localStorage.getItem('idUser')
      fetch(`http://137.184.7.90:1337/api/records/${id}`, {
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
      /* router.push('/contract/form4')   */
    }
  }

  const handleSubmit = () => {
    console.log('voy a enviar el siguiente registro al backend')
    validacion();
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div className="phx-connected">
        <div className="relative flex flex-col flex-1 bg-new-super-blue-100">
          <div className="flex flex-col items-stretch justify-between flex-1 w-full md:flex-row">
            <section className="flex justify-center w-full md:items-center md:justify-center md:w-1/2">
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
                    Cuéntanos más sobre <strong className="text-new-super-purple">tu negocio</strong>
                    </h2>
                  </div>
                  <fieldset className="space-y-6">
                    <div className="w-full radio-box" id="ingresos_input_parent">
                      <legend className="block text-lg leading-relaxed font-semibold ">
                      ¿Tus ingresos por facturación anual son
                      superiores a $235,000,000?
                      </legend>
                      <div className="flex items-center justify-between -mx-1 w-full">
                        <input
                          id="life_policy_application_data_gender"
                          name="ingresos"
                          type="hidden"
                          value=""
                        />
                        <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                          <input
                            className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                            id="gender_radio_input_gastos_yes"
                            name="ingresos_facturacion"
                            required=""
                            type="radio"
                            value="si"
                            ref={ingresos_si}
                            onClick={(event) =>  {
                              ingresosType(event);
                              handleChangeButtonIngresos(event)
                            }}
                          />
                          <span className="inline-block w-full text-lg">Si</span>
                        </label>
                        <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                          <input
                            className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                            id="gender_radio_input_utilidades_no"
                            name="ingresos_facturacion"
                            required=""
                            type="radio"
                            value="no"
                            ref={ingresos_no}
                            onClick={(event) =>  {
                              ingresosType(event);
                              handleChangeButtonIngresos(event)
                            }}
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
                    <div className="w-full radio-box empleados ocultar" ref={empleados} id="empleados_input_parent">
                      <legend className="block text-lg leading-relaxed font-semibold ">
                      ¿Cuentas con más de 100 empleados?
                      </legend>
                      <div className="flex items-center justify-between -mx-1 w-full">
                        <input
                          id="life_policy_application_data_gender"
                          name=""
                          type="hidden"
                          value=""
                        />
                        <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                          <input
                            className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                            id="gender_radio_input_empleados_yes"
                            name="empleados"
                            required=""
                            type="radio"
                            value="si"
                            ref={empleados_si}
                            onClick={(event) =>  {
                              handleChangeEmpleados(event)
                            }}
                          />
                          <span className="inline-block w-full text-lg">Si</span>
                        </label>
                        <label className="flex items-center w-full m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm cursor-pointer rounded-xl hover:bg-gray-100 p-2 font-medium">
                          <input
                            className="form-radio mr-2 border-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current "
                            id="gender_radio_input_empleados_no"
                            name="empleados"
                            required=""
                            type="radio"
                            value="no"
                            ref={empleados_no}
                            onClick={(event) =>  {
                              handleChangeEmpleados(event)
                            }}
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
                          ref={confirm}
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
                  <span
                        className="flex justify-center pt-20 help-block text-red-600 text-sm h-4 text-red-600 text-xs h-4 ocultar"
                        phx-feedback-for="home_policy_application_data_term_conditions"
                        ref={inputValidacion}
                      >
                        Debe llenar todos los campos
                      </span>
                </div>
              </form>
            </section>
            <div className="hidden w-1/2 bg-cover md:block fondo-cuatro">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContractForm3;
