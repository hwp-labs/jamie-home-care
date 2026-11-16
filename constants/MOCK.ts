interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
  //
  show?: number | boolean;
  skip?: number | boolean;
}

const devMode = 1;

export const MOCK = {
  newsletter: {
    formData: devMode,
    action: 1,
    router: 0,
  },
  contactUs: {
    formData: devMode,
    action: 1,
    router: 0,
  },
  bookAppointment: {
    formData: devMode,
    action: 1,
    router: 0,
  },
} as const satisfies Record<string, MockParams>;
