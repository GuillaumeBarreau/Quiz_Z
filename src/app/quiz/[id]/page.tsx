
async function getData() {
  
  const promises: any[] = [];

  for (let i = 1; i <= 386; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
  }
  
  const payload = Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites['front_default'],
      type: result.types.map((type:any) => type.type.name).join(', '),
      id: result.id
    }));
    return pokemon
  }); 

  if (!payload) {
    return [];
  }
  
  return payload;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData();

  return <section>
    <div className="flex flex-wrap p-6 justify-center">
    {
      data.map(
        (pokemon) => (
          <div key={pokemon.id} className="max-w-sm bg-white m-2 h-44 w-64 border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="m-auto" src={pokemon.image} alt={pokemon.image} />
                  <div className="p-5 text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{pokemon.name}</h2>
                    {/* <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.type}</p> */}
                  </div>
              </div>
            )
            )
          }
    </div>
  </section>
}