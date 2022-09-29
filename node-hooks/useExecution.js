const useExecution = (executions) => {
  const executionsData = {};
  executions.forEach((execution) => {
    if (execution instanceof Promise) {
      executionsData[execution] = { type: "promise", status: "pending" };
      execution
        .then((result) => {
          executionsData[execution].result = result;
          executionsData[execution].status = "resolved";
        })
        .catch((error) => {
          console.error(error);
          executionsData[execution].error = error;
          executionsData[execution].status = "rejected";
        });
	} else {
	executionsData[execution] = { type: "function", status: "pending" };
      try {
		  const response = execution?.();
		  executionsData[execution].result = response;
		  executionsData[execution].status = "resolved";
	  } catch (error) {
		  console.error(error);
		  executionsData[execution].error = error;
		  executionsData[execution].status = "rejected";
	  }
    }
  });
  return executionsData;
};

return useExecution;
