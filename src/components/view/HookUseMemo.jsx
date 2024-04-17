import { WithUseMemo } from "../WithUseMemo";
import { WithoutUseMemo } from "../WithoutUseMemo";

export const HookUseMemo = () => {
  return (
    <>
      <h1>useMemo</h1>
        <WithoutUseMemo/>
        <WithUseMemo/>
    </>
  );
}

