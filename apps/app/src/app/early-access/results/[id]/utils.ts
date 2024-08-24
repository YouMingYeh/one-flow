export async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function getRealTimeData() {
  // mock it for now by sleeping for 1 second
  await sleep(1000);
  return {
    pingpong: {
      withdrawFee: 0.01,
      withdrawSpeed: [3, 5],
      customerServices: ['24/7', 'email', 'phone'],
    },
    lianlian: {
      withdrawFee: 0.07,
      withdrawSpeed: [3, 5],
      customerServices: ['24/7', 'email', 'phone'],
    },
    worldfirst: {
      withdrawFee: 0.003,
      withdrawSpeed: [5, 7],
      customerServices: ['24/7', 'email', 'phone'],
    },
  };
}

export async function calculateTotalFee() {
  // mock it for now by sleeping for 2 second
  await sleep(2000);
}

export async function calculateTotalSpeed() {
  // mock it for now by sleeping for 2 second
  await sleep(2000);
}

export async function getCustomerServices() {
  // mock it for now by sleeping for 1 second
  await sleep(1000);
}

export async function findBestSolution() {
  // mock it for now by sleeping for 2 second
  await sleep(2000);
}
