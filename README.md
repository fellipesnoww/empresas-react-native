# empresas-react-native
Projeto de teste destinado ao processo seletivo da Ioasys.

Dê uma olhada no [esboço do projeto.](https://whimsical.com/ioasys-test-SWXiEK9fgr6nDCeJMd7D1r)

## Como iniciar o projeto?
- Clone o repositório;
- Abra o diretório do projeto em seu terminal;
- Instale todas as dependências necessárias com _yarn_ ou _npm_;

_npm_
```bash
    npm install
```
ou com _yarn_
```bash
    yarn
```

- Com todas as dependências instaladas você poderá iniciar o projeto para ver o resultado 😎

Para executar o projeto você pode utilizar o comando a seguir (Execute o comando de acordo com seu S.O):

### **Observação:** caso for executar a aplicação no IOS, entre na pasta ios do projeto, verifique se você possui o [CocoaPods](https://cocoapods.org/) instalado e execute o comando.
## Caso seja no android, execute o _react-native link__

```bash
    pod install
```


_npm_
```bash
    npm run android | ios
```
ou com _yarn_
```bash
    yarn android | ios
```


# Dependências Utilizadas
- _styled-components_: Utilizada para a criação de componentes do React Native utilizando sintaxe do CSS, isso facilita no momento do desenvolvimento.
- _lottie-react-native_: Utilizada para trabalhar com animações, justamente pelo fato de seu funcionamento e criação de componente serem simples.
- _react-native-iphone-x-helper_: Utilizada para verificar os espaçamentos da tela de Iphones X (ou maior), evitando que algum componente da tela fique atrás do detalhe da tela.
- _react-native-vector-icons_: Utilizada para exibição de Icones no aplicativo, é de fácil instalação e usabilidade, possui suporte a várias familias de ícones.
- _axios_: Utilizada para realizar as requisições HTTP baseadas em Promisses, é uma lib muito utilizada que vem sido mantida pela comunidade e transforma respostas em JSON automáticamente.
- _redux_: Utilizada para o gerenciamento de estados na aplicação, sendo possivel acessar um determinado estado de qualquer componente, sem a necessidade de ficar repassando o mesmo por propriedades.
- _redux-saga_: Utilizado para interceptar ações do redux, para realizar requisições HTTP;
- _immer_: Utilizado para tratar os estados que são imutavéis, facilita no momento de setar ou alterar valores no estado.
- _@react-navigation/native_: Utilizado para fazer as navegções entre telas da aplicação.
- _react-native-reanimated_: Instalada junto com a biblioteca para realizar navegções, permite que sejam aplicadas animações no momento da navegação.
- _react-native-gesture-handler_: Instalada junto com a biblioteca para realizar navegação fazendo com que seja possível suportar os gestos que um usuário pode ter, como a própria navegação.
- _react-native-screens_: Instalada junto com a biblioteca para realizar navegação para que seja possivel fazer a gestão de maneira nativa das telas.
- _react-native-safe-area-context_: Instalada junto com a biblioteca para realizar navegação, permite que seja feita a gestão das partes "usáveis" das telas dos smartphones, pois atualmente alguns smarthphones não possuem uma tela retangular simples.
- _@react-native-community/masked-view_: Instalada junto com a biblioteca para realizar navegação, permite a inclusão de novos elementos visuais dentro da tela.
- _intl_: Utilizada para fazer as conversões de valores monetários, tendo suporte a vários tipos de moedas.
- _yarn_: Gerenciador de pacotes, utilizado por ser um pouco mais rápido que o npm.
- _react-native-dropdown-picker_: Utilizado para exibir os tipos de empresas existentes, exibindo o nome do tipo e obtendo o id como o valor selecionado.
- _@react-navigation/stack_: Utilizada para fazer a navegação em pilha, onde cada tela acessada é adicionada na ultima posição da pilha.
- _@react-navigation/bottom-tabs_: Utilizada para fazer a navegação por tabs, disponiveis através da parte inferior da tela do aparelho.
 
# Dependências Desenvolvedor
- _eslint_: Utilizada para verificação de erros no código e realizando uma padronização.
- _eslint-config-airbnb_: Utilizado para pegar a padronização das configurações utilizadas pelo time de desenvolvedores do AirBnb.
- _eslint-config-airbnb-base_: Utilizado para pegar a padronização das configurações utilizadas pelo time de desenvolvedores do AirBnb.
- _eslint-import-resolver-typescript_: Utilizada para fazer com que o React "entenda" os arquivos TypeScript. 
- _eslint-plugin-prettier_: Utilizada para fazer a integração do Prettier com o Eslin,
- _prettier_: Utilizada para auxiliar na padronização do código, realizando algumas alterações automáticas ao salvar.

## Requisitos Atingidos
- Utilizar React Native - ✅
- Utilizar enpoint Listagem de Empresas - ✅
- Utilizar enpoint Detalhamento de Empresas - ✅
- Utilizar enpoint Filtro de Empresas por nome e tipo - ✅
- Aplicação deve possuir mais de uma tela - ✅
- Utilização de Redux / Redux Saga - ✅
- Utilização de linters ou outras ferramentas de análise estática - ✅