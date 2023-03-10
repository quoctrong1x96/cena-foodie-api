export default {
  schemas: {
    userLoginPhone: {
      type: "object",
      properties: {
        phone: {
          type: "string",
          description: "0949412112",
        }
      }
    },
    userLoginEmail: {
      type: "object",
      properties: {
        email: {
          type: "string",
          description: "cenafoodie@gmail.com",
        }
      }
    },
    Todo: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Todo identification number",
        },
        title: {
          type: "string",
          description: "Todo's title",
        },
        completed: {
          type: "boolean",
          description: "The status of the todo",
        },
      },
      
    },
    TodoInput: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "Todo's title",
          example: "Coding in JavaScript",
        },
        completed: {
          type: "boolean",
          description: "The status of the todo",
          example: false,
        },
      },
    },
    AuthResponse:{
      type: "object",
      properties: {
        message: {
          type: "string",
        },
        internal_code: {
          type: "string",
        },
      },
    },
    Error: {
      type: "object",
      properties: {
        message: {
          type: "string",
        },
        internal_code: {
          type: "string",
        },
      },
    },
  },
};
