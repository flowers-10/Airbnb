import styled from "styled-components"

export const PaginationWrapper = styled.div`
		display: flex;
		justify-content: center;
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
      .desc {
        margin-top: 16px;
      }
		}
    
	.dePag {
		.ant-pagination-options {
			display: none !important;
		}
		.ant-pagination-item-active {
			background-color: #222;
			border: none;
			border-radius: 50%;
			a {
				color: #fff;
			}
		}
	}
`
