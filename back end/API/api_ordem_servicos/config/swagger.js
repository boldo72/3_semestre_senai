import { request } from "express"


const documentacao = {
    openapi: "3.0.3",
    info: {
        title: "API Ordem de Serviço",
        description: "API para gerenciamento de ordem de serviço",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local"
        }
    ],
    tags: [
        { name: 'usuarios', description: 'Rotas de usuários' },
        { name: 'departamentos', description: 'Rotas de departamentos' },
        { name: 'ordem_servicos', description: 'Rotas de ordem de serviços' }
    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['usuarios'],
                summary: 'Listar todos os usuários',
                responses: {
                    '200': {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $type: 'arrey',
                                    items: {
                                        $ref: '#/components/schemas/Lista_usuarios'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['usuarios'],
                summary: 'Criar um novo usuário',
                description: 'recebe nome, email, senha',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_usuarios'
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Usuário criado com sucesso',
                    },
                    400: {
                        description: 'Erro ao criar usuário',
                    },
                }
            },
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ['usuarios'],
                summary: 'Listar um usuário específico',
                description: 'Listar um usuário específico, sendo nescesário informar o ID do usuário',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        description: 'ID do usuário',
                        required: true,
                        schema: { type: 'integer' },
                        exeple: 1
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_usuarios'
                            }
                        }
                    },
                },
                responses: {
                    200: {
                        description: 'Usuário atualizado com sucesso',
                        content: { 'application/json': { exeple: "usuario atualizado com sucesso" } }
                    },
                    404: {
                        description: 'usuario nao emcontrado',
                        content: { 'application/json': { exeple: "usuario nao emcontrado" } }
                    },
                    500: {
                        description: 'erroa ao entar no servidor'
                    },
                }
            },
        },
        '/departamento': {
            get: {
                tags: ['departamentos'],
                summary: 'Listar todos os departamentos',
                responses: {
                    '200': {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $type: 'arrey',
                                    items: {
                                        $ref: '#/components/schemas/lista_departamentos'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['departamentos'],
                summary: 'Criar um novo departamento',
                description: 'recebe nome',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_departamentos'
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Departamento criado com sucesso',
                    },
                    400: {
                        description: 'Erro ao criar departamento',
                    },
                }
            }
        },
        "/departamento/{id_departamento}": {
            put: {
                tags: ['departamentos'],
                summary: 'Atualizar um departamento',
                description: 'recebe id_departamento e nome',
                parameters: [
                    {
                        name: 'id_departamento',
                        in: 'path',
                        description: 'ID do departamento',
                        required: true,
                        schema: { type: 'integer' },
                        example: 1
                    },
                    {
                        name: 'nome',
                        in: 'body',
                        description: 'nome do departamento',
                        required: true,
                        schema: { type: 'string' },
                        example: 'TI'
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_departamentos'
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Departamento atualizado com sucesso',
                    },
                    400: {
                        description: 'Erro ao atualizar departamento',
                    },
                    404: {
                        description: 'Departamento nao encontrado',
                    },
                }
            },
        },
        '/ordem_servicos': {
            get: {
                tags: ['ordem_servicos'],
                summary: 'Listar todas as ordem de serviços',
                responses: {
                    '200': {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $type: 'arrey',
                                    items: {
                                        $ref: '#/components/schemas/lista_ordem_servicos'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['ordem_servicos'],
                summary: 'Criar uma nova ordem de serviço',
                description: 'recebe descricao, id_departamento, id_usuario',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_ordem_servicos'
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: 'Ordem de serviço criada com sucesso',
                    },
                    400: {
                        description: 'Erro ao criar ordem de serviço',
                    },
                }
            }
        },
        "/ordem_servicos/{id_ordem}": {
            put: {
                tags: ['ordem_servicos'],
                summary: 'Atualizar uma ordem de serviço',
                description: 'recebe id_ordem, descricao, id_departamento, id_usuario',
                parameters: [
                    {
                        name: 'id_ordem',
                        in: 'path',
                        description: 'ID da ordem de serviço',
                        required: true,
                        schema: { type: 'integer', example: 1 }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/cadastro_ordem_servicos'
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Ordem de serviço atualizada com sucesso',
                    },
                    400: {
                        description: 'Erro ao atualizar ordem de serviço',
                    },
                    404: {
                        description: 'Ordem de serviço nao encontrada',

                    },
                }
            },
        }        
    },

        components: {
            schemas: {
                Lista_usuarios: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer', example: 1 },
                        nome: { type: 'string', example: 'Boldo' },
                        email: { type: 'string', example: 'Boldo@sesi.br' }
                    }
                },
                cadastro_usuarios: {
                    type: 'object',
                    properties: {
                        nome: { type: 'string', example: 'Boldo' },
                        email: { type: 'string', example: 'Boldo@boldo.br' },
                        senha: { type: 'string', example: 'boldo211' }
                    }
                },
                lista_departamentos: {
                    type: 'object',
                    properties: {
                        id_departamento: { type: 'integer', example: 1 },
                        nome_departamento: { type: 'string', example: 'TI' }
                    }
                },
                cadastro_departamentos: {
                    type: 'object',
                    properties: {
                        id_departamento: { type: 'integer', example: 1 },
                        nome_departamento: { type: 'string', example: 'RH' }
                    }
                },
                lista_ordem_servicos: {
                    type: 'object',
                    properties: {
                        id_ordem_servico: { type: 'integer', example: 1 },
                        descricao: { type: 'string', example: 'Problema no computador' },
                        id_departamento: { type: 'integer', example: 1 },
                        id_usuario: { type: 'integer', example: 1 }
                    }
                },
                cadastro_ordem_servicos: {
                    type: 'object',
                    properties: {
                        id_ordem_servico: { type: 'integer', example: 1 },
                        descricao: { type: 'string', example: 'Problema no computador' },
                        id_departamento: { type: 'integer', example: 1 },
                        id_usuario: { type: 'integer', example: 1 }
                    }
                }
            }
        }
    }

export default documentacao



