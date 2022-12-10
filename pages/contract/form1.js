import { useState, useRef } from "react";
import { useRouter } from 'next/router';


const ContractForm1 = () => {
  const router = useRouter()

  const numberOfMemberSelectInput = useRef();
  const selectIndemnizacion = useRef();
  const selectIndemnizacionCustom = useRef();
  const membresiaSelect = () => {
    var selectedOption = numberOfMemberSelectInput.current.options.selectedIndex;
    console.log(selectedOption)
    if (selectedOption == 4) {
      selectIndemnizacionCustom.current.classList.remove('ocultar')
      selectIndemnizacion.current.classList.add('ocultar')
    } else if(selectedOption == 0){
      selectIndemnizacionCustom.current.classList.add('ocultar')
      selectIndemnizacion.current.classList.remove('ocultar')
      selectIndemnizacion.current.options.selectedIndex = 0;
    } else if(selectedOption == 1){
      selectIndemnizacionCustom.current.classList.add('ocultar')
      selectIndemnizacion.current.classList.remove('ocultar')
      selectIndemnizacion.current.options.selectedIndex = 1;
      setForm({
        ...form, 
        indemnizacion: "$250,000"
      })
    } else if(selectedOption == 2){
      selectIndemnizacionCustom.current.classList.add('ocultar')
      selectIndemnizacion.current.classList.remove('ocultar')
      selectIndemnizacion.current.options.selectedIndex = 2;
      setForm({
        ...form, 
        indemnizacion: "$500,000"
      })
    } else if(selectedOption == 3){
      selectIndemnizacionCustom.current.classList.add('ocultar')
      selectIndemnizacion.current.classList.remove('ocultar')
      selectIndemnizacion.current.options.selectedIndex = 3;
      setForm({
        ...form, 
        indemnizacion: "$650,000"
      })
    }
  }


  const [form, setForm] = useState({
    nombre: '',
    domicilio: '',
    emailEmpresa:'',
    rfc: '',
    membresia:'',
    indemnizacion: '',
    indemnizacionCustom:'',
    ciudad_interes: ''
  })

  const handleChangeValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const inputNombreFiscal = useRef()
  const inputDom = useRef()
  const inputCorreoFiscal = useRef()
  const inputRFC = useRef()
  const selectCiudad = useRef()
  const inputValidacion = useRef()
  const validacion = () =>{
    console.log(inputNombreFiscal.current.value)
    console.log(inputDom.current.value)
    console.log(inputCorreoFiscal.current.value)
    console.log(inputRFC.current.value)
    console.log(numberOfMemberSelectInput.current.options.selectedIndex)
    console.log(selectIndemnizacion.current.options.selectedIndex)
    console.log(selectCiudad.current.options.selectedIndex)
    if(inputNombreFiscal.current.value === "" || inputDom.current.value === "" || inputCorreoFiscal.current.value === "" || inputRFC.current.value === "" || numberOfMemberSelectInput.current.options.selectedIndex === 0 || selectIndemnizacion.current.options.selectedIndex === 0 || selectCiudad.current.options.selectedIndex === 0){
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
      /* router.push('/contract/form2')   */
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
                        Domicilio Fiscal
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
                          name="emailEmpresa"
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
                        Membresía
                      </label>
                      <div
                        id="membresia_text_input_parent"
                        className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                      >
                        <select
                            className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                            id="number_of_stories_select_input"
                            name="membresia"
                            phx-debounce="250"
                            required=""
                            onChange={(event) => (handleChangeValue(event))}
                            onClick={() => (membresiaSelect())}
                            ref={numberOfMemberSelectInput}
                          >
                            <option value="" selected="">
                              Selecciona tu membresía
                            </option>
                            <option value="1">
                              Sandy
                            </option>
                            <option value="2">
                              Michelle
                            </option>
                            <option value="3">
                              Katrina
                            </option>
                            <option value="4">
                              Wilma
                            </option>
                          </select>
                      </div>
                    </div>
                    <div className="w-full" >
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
                            ref={selectIndemnizacion}
                            onChange={(event) => (handleChangeValue(event))}
                            disabled
                          >
                            <option value="">
                              Limite
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
                          <input
                          autocomplete=""
                          className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full ocultar"
                          id="rfc_text_input"
                          inputmode="email"
                          name="indemnizacionCustom"
                          oninput="setCustomValidity('')"
                          oninvalid="this.setCustomValidity('Campo requerido')"
                          phx-debounce="250"
                          required=""
                          type="text"
                          ref={selectIndemnizacionCustom}
                          placeholder="$250,000 a $7,000,000"
                          onChange={(event) => (handleChangeValue(event))}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        className="block mb-1 text-lg font-semibold"
                        for="city_of_stories_select_input"
                      >
                        Ciudad
                      </label>
                      <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                        <div className=" relative flex items-center justify-between w-full">
                          <select
                            className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                            id="city_of_stories_select_input"
                            name="ciudad_interes"
                            phx-debounce="250"
                            required=""
                            ref={selectCiudad}
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
            <div className="hidden w-1/2 bg-cover md:block fondo-dos">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContractForm1;
