import styled from "styled-components";

export const RoomsWrapper = styled.div`
  margin-top: 128px;
  position: relative;
  padding: 40px 20px;
  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin: 0 0 10px 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.8)
  }

`