// export function fetchAllProducts() {
//   return new Promise(async (resolve) =>{
//     //TODO: we will not hard-code server URL here
//     const response = await fetch('http://localhost:8080/products') 
//     const data = await response.json()
//     resolve({data})
//   }
//   );
// }


// export function fetchProductById(id) {
//   return new Promise(async (resolve) =>{
//     //TODO: we will not hard-code server URL here
//     const response = await fetch('http://localhost:8080/products/'+id)
//     const data = await response.json()
//     resolve({data})
//   }
//   );
// }

// export function fetchProductsByFilters(filter,sort,pagination) {
//   // filter = {"category":["smartphone","laptops"]}
//   // sort = {_sort:"price",_order="desc"}
//   // pagination = {_page:1,_limit=10} 
//   // TODO : on server we will support multi values in filter
//   let queryString = '';
//   for(let key in filter){
//     const categoryValues = filter[key];
//     if(categoryValues.length){
//       const lastCategoryValue = categoryValues[categoryValues.length-1]
//       queryString += `${key}=${lastCategoryValue}&`
//     }
//   }
//   for(let key in sort){
//     queryString += `${key}=${sort[key]}&`
//   }
//   console.log(pagination)
//   for(let key in pagination){
//     queryString += `${key}=${pagination[key]}&`
//   }
//   return new Promise(async (resolve) =>{
//     //TODO: we will not hard-code server URL here
//     const response = await fetch('http://localhost:8080/products?'+queryString) 
//     const data = await response.json()
//     const totalItems = await response.headers.get('X-Total-Count')
//     resolve({data:{products:data,totalItems:+totalItems}})
//   }
//   );
// }


// export function fetchCategories() {
//   return new Promise(async (resolve) =>{
//     const response = await fetch('http://localhost:8080/categories') 
//     const data = await response.json()
//     resolve({data})
//   }
//   );
// }

// export function fetchBrands() {
//   return new Promise(async (resolve) =>{
//     const response = await fetch('http://localhost:8080/brands') 
//     const data = await response.json()
//     resolve({data})
//   }
//   );
// }

















export async function fetchAllProducts() {
  try {
    const response = await fetch('http://localhost:8080/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Fetching all products failed:', error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(`Fetching product by ID (${id}) failed:`, error);
    throw error;
  }
}

export async function fetchProductsByFilters(filter = {}, sort = {}, pagination = {}) {
  let queryString = '';

  // Build query string for filters
  for (const key in filter) {
    if (filter[key].length > 0) {
      const filterValues = filter[key];
      queryString += filterValues.map(value => `${key}=${value}`).join('&') + '&';
    }
  }

  // Build query string for sorting
  for (const key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  // Build query string for pagination
  for (const key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  try {
    const response = await fetch(`http://localhost:8080/products?${queryString}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');
    return { data: { products: data, totalItems: Number(totalItems) } };
  } catch (error) {
    console.error('Fetching products by filters failed:', error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch('http://localhost:8080/categories');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Fetching categories failed:', error);
    throw error;
  }
}

export async function fetchBrands() {
  try {
    const response = await fetch('http://localhost:8080/brands');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Fetching brands failed:', error);
    throw error;
  }
}
