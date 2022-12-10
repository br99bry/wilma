import { useState, useRef } from "react";
import { useRouter } from 'next/router';

const ContractForm3 = () => {
  const router = useRouter()
  

  console.log('voy a enviar el siguiente registro al backend')
  const id = localStorage.getItem('idUser')
  fetch(`http://137.184.7.90:1337/api/records/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

localStorage.removeItem('idUser')

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
                    Ya hemos registrado tus datos y apartado tu suscripción de <strong className="text-new-super-purple">Wilma </strong>para la temporada de 
                    <strong className="text-new-super-purple"> huracán 2023 </strong>
                    </h2>
                  </div>
                  <div className="mb-4">
                    <h2 className="mb-2 text-xl md:text-3xl font-semibold">
                    La temporada de huracán en tu zona inicia e <strong className="text-new-super-purple">1 de junio 2023</strong>, por lo que te contactaremos en
                    <strong className="text-new-super-purple"> febrero 2023 </strong>para que puedas terminar tu contratación
                    </h2>
                  </div>
                  <fieldset className="space-y-6">
                    <div className="w-full radio-box" id="ingresos_input_parent">
                      <div className="flex items-center justify-between -mx-1 w-full">
                      <h2 className="mb-2 text-xl md:text-3xl font-semibold">
                        Ciudad: 
                      </h2>
                        <input
                          id="life_policy_application_data_gender"
                          name="ingresos_facturacion"
                          type="hidden"
                          value=""
                        />
                        <label className="flex items-center m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm rounded-xl hover:bg-gray-100 p-2 font-medium width-inherit">
                          <input
                            className="mr-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current background-none width-inherit"
                            id="gender_radio_input_gastos_yes"
                            name="life_policy_application[data][ingresos]"
                            required=""
                            type="text"
                            disabled
                          />
                        </label>
                      </div>
                    </div>
                    <div className="w-full radio-box" id="ingresos_input_parent">
                      <div className="flex items-center justify-between -mx-1 w-full">
                      <h2 className="mb-2 text-xl md:text-3xl font-semibold">
                      Membresía:
                      </h2>
                        <input
                          id="life_policy_application_data_gender"
                          name="ingresos_facturacion"
                          type="hidden"
                          value=""
                        />
                        <label className="flex items-center m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm rounded-xl hover:bg-gray-100 p-2 font-medium width-inherit">
                          <input
                            className="mr-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current background-none width-inherit"
                            id="gender_radio_input_gastos_yes"
                            name="life_policy_application[data][ingresos]"
                            required=""
                            type="text"
                            disabled
                          />
                        </label>
                      </div>
                    </div>
                    <div className="w-full radio-box" id="ingresos_input_parent">
                      <div className="flex items-center justify-between -mx-1 w-full">
                      <h2 className="mb-2 text-xl md:text-3xl font-semibold">
                      Costo anual:
                      </h2>
                        <input
                          id="life_policy_application_data_gender"
                          name="ingresos_facturacion"
                          type="hidden"
                          value=""
                        />
                        <label className="flex items-center m-1 px-2 py-2 text-xl font-medium bg-white border-2 border-v3-super-gray-400 shadow-sm rounded-xl hover:bg-gray-100 p-2 font-medium">
                          <input
                            className="mr-2 border-v3-super-gray-400 text-v2-super-pink-500 ring-current ring-offset-current focus:ring-current background-none width-inherit"
                            id="gender_radio_input_gastos_yes"
                            name="life_policy_application[data][ingresos]"
                            required=""
                            type="text"
                            disabled
                          />
                        </label>
                      </div>
                    </div>
                    
                  </fieldset>
                </div>
              </form>
            </section>
            <div className="hidden w-1/2 bg-cover md:block fondo-final">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContractForm3;
