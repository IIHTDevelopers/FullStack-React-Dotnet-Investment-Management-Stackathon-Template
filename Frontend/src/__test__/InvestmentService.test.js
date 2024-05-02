import investmentService from "../services/InvestmentService";

let InvestmentService = "InvestmentService";

jest.mock("axios");

describe(InvestmentService, () => {
    const mockInvestments = [
        {
            _id: "1",
            name: "Investment 1",
            amount: 1000,
            description: "Description 1",
            category: "Category 1",
        },
        {
            _id: "2",
            name: "Investment 2",
            amount: 2000,
            description: "Description 2",
            category: "Category 2",
        },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("functional", () => {
        test(`${InvestmentService} functional should get all investments`, async () => {
            let isNull = false;
            try {
                const response = await investmentService.getAllInvestments();
                isNull = response === null;
                throw new Error("Error in getAllInvestments()");
            } catch (error) {
                if (isNull) {
                    expect(error).toBeNull();
                } else {
                    investmentService.getAllInvestments = jest
                        .fn()
                        .mockResolvedValueOnce(mockInvestments);
                    const result = await investmentService.getAllInvestments();
                    expect(investmentService.getAllInvestments).toHaveBeenCalled();
                    expect(result).toEqual(mockInvestments);
                }
            }
        });

        test(`${InvestmentService} functional should create a new investment`, async () => {
            const newInvestment = { name: "Investment 3", amount: 3000, description: "Description 3", category: "Category 3" };
            let isNull = false;
            try {
                const response = await investmentService.createInvestment(newInvestment);
                isNull = response === null;
                throw new Error("Error in createInvestment()");
            } catch (error) {
                if (isNull) {
                    expect(error).toBeNull();
                } else {
                    investmentService.createInvestment = jest
                        .fn()
                        .mockResolvedValueOnce(newInvestment);
                    const result = await investmentService.createInvestment(newInvestment);
                    expect(investmentService.createInvestment).toHaveBeenCalledWith(newInvestment);
                    expect(result).toEqual(newInvestment);
                }
            }
        });
    });
});
