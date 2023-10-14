
export const getUser = async () => {
  const url = '/api/login';
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result
  }
  catch (error: any) {
    return error.message
  }
}

export const createUser = async (userdata: UsersData) => {
  const url = '/api/register';
  try {
    const response = await fetch(url, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(userdata),
    });
    if(!response.ok){
      let error = await response.text()
      return{error}
    }
    const result = await response.json();
    return result;
  } catch (error: any) {

    return {error:error.message};
  }
};


export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if(!response.ok){
      let error = await response.text()
      console.log({response})
      return{error}
    }
    const result = await response.json();
    return result
  } catch (error: any) {
    return {error:error.message};
  }

};

export const getSensors = async () => {
  const url = `/api/get-sensors/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message); 
  }
};

export const getTemp = async () => {
  try {
    const response = await fetch(`/api/get-temp`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error:any) {
    return error.message
  }
}
