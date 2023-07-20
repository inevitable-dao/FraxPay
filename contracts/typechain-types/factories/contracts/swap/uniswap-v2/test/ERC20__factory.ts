/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../contracts/swap/uniswap-v2/test/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c22380380610c2283398101604081905261002f9161019f565b60408051808201825260088152670546f6e6963204c560c41b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ffe29fbd2c5253d79a654ed81557908904da248d1ada8d5ed93d20192eae8daf7818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355610108338261010e565b506101de565b8060005461011c91906101b8565b60009081556001600160a01b0383168152600160205260409020546101429082906101b8565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906101939085815260200190565b60405180910390a35050565b6000602082840312156101b157600080fd5b5051919050565b600082198211156101d957634e487b7160e01b600052601160045260246000fd5b500190565b610a35806101ed6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461020d578063a9059cbb14610249578063d505accf1461025c578063dd62ed3e1461027157600080fd5b80633644e515146101c457806370a08231146101cd5780637ecebe00146101ed57600080fd5b806323b872dd116100bd57806323b872dd1461017057806330adf81f14610183578063313ce567146101aa57600080fd5b806306fdde03146100e4578063095ea7b31461013657806318160ddd14610159575b600080fd5b6101206040518060400160405280600881526020017f546f6e6963204c5000000000000000000000000000000000000000000000000081525081565b60405161012d91906107c7565b60405180910390f35b610149610144366004610863565b61029c565b604051901515815260200161012d565b61016260005481565b60405190815260200161012d565b61014961017e36600461088d565b6102b2565b6101627f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101b2601281565b60405160ff909116815260200161012d565b61016260035481565b6101626101db3660046108c9565b60016020526000908152604090205481565b6101626101fb3660046108c9565b60046020526000908152604090205481565b6101206040518060400160405280600881526020017f544f4e49432d4c5000000000000000000000000000000000000000000000000081525081565b610149610257366004610863565b61038c565b61026f61026a3660046108eb565b610399565b005b61016261027f36600461095e565b600260209081526000928352604080842090915290825290205481565b60006102a9338484610689565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff146103775773ffffffffffffffffffffffffffffffffffffffff841660009081526002602090815260408083203384529091529020546103459083906109c0565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b6103828484846106f8565b5060019392505050565b60006102a93384846106f8565b42841015610408576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e697377617056323a2045585049524544000000000000000000000000000060448201526064015b60405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff8816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b919087610468836109d7565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016105099291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610592573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061060d57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e41545552450000000060448201526064016103ff565b61067e898989610689565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409020546107299082906109c0565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600160205260408082209390935590841681522054610766908290610a10565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106eb9085815260200190565b600060208083528351808285015260005b818110156107f4578581018301518582016040015282016107d8565b81811115610806576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085e57600080fd5b919050565b6000806040838503121561087657600080fd5b61087f8361083a565b946020939093013593505050565b6000806000606084860312156108a257600080fd5b6108ab8461083a565b92506108b96020850161083a565b9150604084013590509250925092565b6000602082840312156108db57600080fd5b6108e48261083a565b9392505050565b600080600080600080600060e0888a03121561090657600080fd5b61090f8861083a565b965061091d6020890161083a565b95506040880135945060608801359350608088013560ff8116811461094157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561097157600080fd5b61097a8361083a565b91506109886020840161083a565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156109d2576109d2610991565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a0957610a09610991565b5060010190565b60008219821115610a2357610a23610991565b50019056fea164736f6c634300080a000a";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(_totalSupply, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totalSupply, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}