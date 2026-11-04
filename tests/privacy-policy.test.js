import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Privacy Policy Page", () => {
  it("should load the privacy policy and display key sections", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://sintropiafx.github.io/privacy-policy/" });

    const headerAssert = await testdriver.assert("the text 'SINTROPIA FX' and 'Política de Privacidad' are visible on the page");
    expect(headerAssert).toBeTruthy();

    await testdriver.scroll("down");

    const footerAssert = await testdriver.assert("the privacy policy sections and footer copyright notice are displayed");
    expect(footerAssert).toBeTruthy();
  });
});
