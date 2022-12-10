import { useState, useRef } from "react";
import { useRouter } from 'next/router';

const ContractForm2 = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    valor_activos: '',
    tipo_local: '',
    inmueble: '',
    gastos_utilidades:'',
    valor_gastos_utilidades:''
  })

  const handleChangeValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const local = useRef()
  const localType = (value) => {
    if(value.target._wrapperState.initialValue == "propio"){
      local.current.classList.remove('ocultar');
    }else if(value.target._wrapperState.initialValue == "arrendado"){
      local.current.classList.add('ocultar');
    }
  };

  const cobertura = useRef();
  const coberturaGastos = useRef();
  const coberturaUtilidades = useRef();
  const coberturaType = (value) => {
    cobertura.current.classList.remove('ocultar');
    if(value.target._wrapperState.initialValue == "gastos"){
      coberturaGastos.current.classList.remove('ocultar');
      coberturaUtilidades.current.classList.add('ocultar');
    }else if(value.target._wrapperState.initialValue == "utilidades"){
      coberturaUtilidades.current.classList.remove('ocultar');
      coberturaGastos.current.classList.add('ocultar');
    }
  }

  const handleChangeButtonLocal = (event) =>{
    setForm({
      ...form, 
      tipo_local: event.target.value
    })
  }
  const handleChangeButtonGastos = (event) =>{
    setForm({
      ...form, 
      gastos_utilidades: event.target.value
    })
  }

  const valorEstimado = useRef()
  const inmuebleValor = useRef()
  const inputValidacion = useRef()
  const validacion = () =>{
    console.log(valorEstimado)
    console.log(local)
    console.log(inmuebleValor)
    if(valorEstimado.current.value === "" || inmuebleValor.current.value === "" ){
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
      /* router.push('/contract/form3')   */
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
                    <div className="w-full">
                      <label
                        className="block mb-1 text-lg font-semibold"
                        for="valor_estimado_select_input"
                      >
                        Valor estimado de los activos de tu compañía
                      </label>
                      <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                        <div className=" relative flex items-center justify-between w-full">
                          <select
                            className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                            id="valor_estimado_select_input"
                            name="valor_activos"
                            phx-debounce="250"
                            required=""
                            ref={valorEstimado}
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
                      Tipo de Local
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
                            onClick={(event) =>  {
                              localType(event);
                              handleChangeButtonLocal(event)
                            }}
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
                            onClick={(event) =>  {
                              localType(event);
                              handleChangeButtonLocal(event)
                            }}
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
                        Valor del bien inmueble propio
                      </label>
                      <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                        <div className=" relative flex items-center justify-between w-full">
                          <select
                            className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                            id="valor_inmueble_select_input"
                            name="valor_inmueble"
                            phx-debounce="250"
                            required=""
                            ref={inmuebleValor}
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
                      ¿Te gustaría cubrir tus gastos fijos o tus
                      utilidades después de impuestos?
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
                          onClick={(event) => {
                            coberturaType(event);
                            handleChangeButtonLocal(event)
                          }}
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
                            onClick={(event) => {
                              coberturaType(event);
                              handleChangeButtonGastos(event)
                            }}
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
                    <div className="w-full cobertura ocultar" ref={cobertura}>
                      <label
                        className="block mb-1 text-lg font-semibold ocultar"
                        for="cobertura_select_input" ref={coberturaGastos}
                      >
                        Valor de tus gastos fijos
                      </label>
                      <label
                        className="block mb-1 text-lg font-semibold ocultar"
                        for="cobertura_select_input" ref={coberturaUtilidades}
                      >
                        Utilidades antes de impuestos
                      </label>
                      <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                        <div className=" relative flex items-center justify-between w-full">
                          <select
                            className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                            id="cobertura_select_input"
                            name="valor_gastos_utilidades"
                            phx-debounce="250"
                            required=""
                            onChange={(event) => (handleChangeValue(event))}
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
            <div className="hidden w-1/2 bg-cover md:block fondo-tres">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContractForm2;
