import styled from '@emotion/styled';

export const Item = styled.li`
  width: 200px;
  padding: 20px;
  display: flex;

  align-items: center;
  gap: 5px;
  border: 2px solid beige;
`;

export const StatusOnline = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;

export const StatusOffline = styled(StatusOnline)`
  background-color: red;
`;
export const Avatar = styled.img`
  width: 48px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
`;
