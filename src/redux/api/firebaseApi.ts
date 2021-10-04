import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  child,
  update,
  remove,
  get,
} from "firebase/database";

interface type_api_url {
  url: string;
  data?: any;
  target_node?: string;
}

export const getApiFirebase = async ({ url }: type_api_url) => {
  const dbRef = ref(getDatabase());
  try {
    const res = await get(child(dbRef, url));

    return {
      data: res.toJSON(),
      status: 200,
    };
  } catch (e: any) {
    const res = e.response;

    return {
      data: null,
      status: res.status,
    };
  }
};

export const setApiFirebase = async ({ url, data }: type_api_url) => {
  const db = getDatabase();
  console.log("data : ");
  console.log(data);
  console.log(url);

  try {
    // const tmp = null;
    const tmp = await set(ref(db, url), data);
    return {
      data: tmp,
      status: 200,
    };
  } catch (e: any) {
    const res = e.response;

    return {
      data: null,
      status: res.status,
    };
  }
};

export const deleteApiFirebase = async ({
  url,
  data,
  target_node,
}: type_api_url) => {
  const db = getDatabase();

  try {
    let deletesItem = {} as any;
    deletesItem[target_node as string] = data;

    const res = await update(ref(db, url), deletesItem);
    return {
      data: res,
      status: 200,
    };
  } catch (e: any) {
    console.log(e);
    return {
      data: null,
      status: 404,
    };
  }
};
