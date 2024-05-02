import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentPlanningComponent from '../components/InvestmentPlanning';
import InvestmentService from '../services/InvestmentService';

jest.mock('../services/InvestmentService');

describe('InvestmentPlanningComponent', () => {
    const mockInvestments = [
        { id: '1', name: 'Investment 1', amount: 100, date: '2023-01-01', category: 'Category 1' },
    ];

    beforeEach(() => {
        InvestmentService.getAllInvestments.mockResolvedValue(mockInvestments);
    });

    describe('boundary', () => {
        test('InvestmentPlanningComponent boundary has Investments in h1', () => {
            render(<InvestmentPlanningComponent />);
            const headingElement = screen.getByRole('heading', { name: /investments/i });
            expect(headingElement).toBeInTheDocument();
        });

        test('InvestmentPlanningComponent boundary has Create Investment as h2', () => {
            render(<InvestmentPlanningComponent />);
            const headingElement = screen.getByRole('heading', { name: /create investment/i });
            expect(headingElement).toBeInTheDocument();
        });

        test('InvestmentPlanningComponent boundary has textfield with Name placeholder', () => {
            render(<InvestmentPlanningComponent />);
            const nameInput = screen.getByPlaceholderText('Name');
            expect(nameInput).toBeInTheDocument();
        });

        test('InvestmentPlanningComponent boundary has textfield with Amount placeholder', () => {
            render(<InvestmentPlanningComponent />);
            const amountInput = screen.getByPlaceholderText('Amount');
            expect(amountInput).toBeInTheDocument();
        });

        test('InvestmentPlanningComponent boundary has textfield with Date placeholder', () => {
            render(<InvestmentPlanningComponent />);
            const dateInput = screen.getByPlaceholderText('Date');
            expect(dateInput).toBeInTheDocument();
        });

        test('InvestmentPlanningComponent boundary has textfield with Category placeholder', () => {
            render(<InvestmentPlanningComponent />);
            const categoryInput = screen.getByPlaceholderText('Category');
            expect(categoryInput).toBeInTheDocument();
        });
    });
});
