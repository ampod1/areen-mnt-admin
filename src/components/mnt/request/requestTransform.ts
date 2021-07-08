export const requestTransform = (data: any) => {
  console.log(data.technician_id);

  delete data.technician_id;
  return { ...data };
};
