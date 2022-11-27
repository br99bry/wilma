import { useState } from "react";
import { useRouter } from 'next/router'

function App() {
  const router = useRouter()
  const [form, setForm] = useState({
    usuario: '',
    email: '',
    whatsapp: '',
    password: ''
  })

  /* let option = document.querySelector('#number_of_stories_select_input');
  const comer = document.querySelector('.Comercial');
  const emple = document.querySelector('.Empleados');
  function questions(){
    var selectedOption = option.options.selectedIndex;
    if(selectedOption == 0 || selectedOption == 5){
      comer.classList.add('ocultar');
      emple.classList.add('ocultar');
    }else{
      comer.classList.remove('ocultar');
      emple.classList.remove('ocultar');
    }
  } */
  // option.addEventListener('change', questions)

  const handleChangeValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = () => {
    router.push('/contract')
  console.log('voy a enviar el siguiente registro al backend')
  fetch('http://localhost:3006/api/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data: form}),
  })
    .then((response) => response.json())
    .then((dataJson) => {
      console.log('Success:', dataJson);
      localStorage.setItem('idUser', dataJson.data.id)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
                Cotiza tu <strong className="text-new-super-purple">Seguro</strong>
              </h2>
              <p className="text-base leading-relaxed md:text-lg">
                Ingresa los siguientes datos para cotizar
              </p>
            </div>
            <fieldset className="space-y-6">
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="full_name_text_input"
                >
                  Nombre
                </label>
                <div
                  id="full_name_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <div className="flex items-center justify-center px-3 py-2 text-current opacity-50">
                    <i className="far fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="full_name_text_input"
                    name="usuario"
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
                  for="mobile_text_input"
                >
                  Número de Whatsapp
                </label>
                <div
                  id="mobile_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <div className="flex items-center justify-center px-3 py-2 text-current opacity-50">
                    <i className="far fa-phone" aria-hidden="true"></i>
                  </div>
                  <input
                    autocomplete="tel-national"
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="mobile_text_input"
                    inputmode="tel"
                    name="whatsapp"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    phx-hook="formatPhone"
                    placeholder="10 dígitos"
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
                    type="email"
                    onChange={(event) => (handleChangeValue(event))}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="email_text_input"
                >
                  Contraseña
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
                    name="password"
                    oninput="setCustomValidity('')"
                    oninvalid="this.setCustomValidity('Campo requerido')"
                    phx-debounce="250"
                    placeholder="chiditoPerroLoco"
                    required=""
                    type="password"
                    onChange={(event) => (handleChangeValue(event))}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="number_of_stories_select_input"
                >
                  Giro
                </label>
                <div className=" border-2 flex items-center w-full text-xl font-medium bg-white outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:border-pink-500">
                  <div className="flex items-center justify-center px-3 py-2 text-current opacity-50">
                    <i className="far far fa-building" aria-hidden="true"></i>
                  </div>
                  <div className=" relative flex items-center justify-between w-full">
                    <select
                      className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent pr-8"
                      id="number_of_stories_select_input"
                      name="quake_policy_application[data][number_of_stories]"
                      phx-debounce="250"
                      required=""
                    >
                      <option value="" selected="">
                        Seleccionar Giro
                      </option>
                      <option value="1">
                        Hospedaje/Restaurantes y Eventos
                      </option>
                      <option value="2">Transporte</option>
                      <option value="3">
                        Tour Operador y Proveedor de Experiencias
                      </option>
                      <option value="4">Servicios en Playa</option>
                      <option value="5">
                        Renta de Propiedades Vacacionales
                      </option>
                      <option value="6">
                        Bienes Raices y Administración de Propiedades
                      </option>
                      <option value="7">Cultura</option>
                      <option value="8">Servicios de Salud</option>
                      <option value="9">Asesoria</option>
                      <option value="10">Locales Comerciales</option>
                      <option value="11">Otros</option>
                    </select>
                    <i
                      className="absolute right-0 px-4 text-xs pointer-events-none fas fa-caret-down"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="w-full ocultar Comercial">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="full_comer_text_input"
                >
                  Nombre Comercial
                </label>
                <div
                  id="full_comer_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <div className="flex items-center justify-center px-3 py-2 text-current opacity-50">
                    <i className="far fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="full_comer_text_input"
                    name="quake_policy_application[data][full_comerc]"
                    oninput="setCustomValidity('')"
                    phx-debounce="250"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full ocultar Empleados">
                <label
                  className="block mb-1 text-lg font-semibold"
                  for="number_text_input"
                >
                  Número de Empleados
                </label>
                <div
                  id="number_text_input_parent"
                  className="flex items-center overflow-hidden text-xl font-medium bg-white border-2 outline-none border-v3-super-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-pink-200 focus-within:border-pink-500"
                >
                  <div className="flex items-center justify-center px-3 py-2 text-current opacity-50">
                    <i className="far fa-phone" aria-hidden="true"></i>
                  </div>
                  <input
                    autocomplete="tel-national"
                    className="w-full p-2 border-none outline-none appearance-none focus:text-v2-super-gray-700 bg-transparent w-full "
                    id="number_text_input"
                    inputmode="tel"
                    name="quake_policy_application[data][number]"
                    oninput="setCustomValidity('')"
                    phx-debounce="250"
                    phx-hook="formatPhone"
                    placeholder=""
                    type="number"
                  />
                </div>
              </div>
            </fieldset>
            <div className="flex justify-end pt-20">
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
}

export default App;
