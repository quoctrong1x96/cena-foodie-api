export default {
    postPhone:{
        tags: ['Authentication'],
        description: "Login with Phone",
        summary: "Login with Phone",
        operationId: "authPhone",
        requestBody:{
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/userLoginPhone'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Response user, store, and token",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/AuthResponse'
                        }
                    }
                }
            },
            '401':{
                description:"Wrong Credentials"
            },
            '500':{
                description:"Server error"
            }
        }
    },
    postEmail:{
        tags: ['Authentication'],
        description: "Login with Email",
        summary: "Login with email",
        operationId: "authEmail",
        requestBody:{
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/userLoginEmail'
                    }
                }
            }
        },
        responses:{
            '200':{
                description:"Response user, store, and token",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/AuthResponse'
                        }
                    }
                }
            },
            '401':{
                description:"Wrong Credentials"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}